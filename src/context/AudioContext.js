"use client";  // Ensure this file is a Client Component

import { createContext, useContext, useState, useEffect } from 'react';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [audioElement, setAudioElement] = useState(null);

  const songs = [
    '/songs/song-1.mp3',
    '/songs/song-2.mp3',
    '/songs/song-3.mp3',
    '/songs/song-4.mp3',
  ];

  // Load saved state from localStorage
  useEffect(() => {
    const savedSongIndex = parseInt(localStorage.getItem('currentSongIndex'), 10);
    const savedIsPlaying = JSON.parse(localStorage.getItem('isPlaying'));

    if (!isNaN(savedSongIndex) && savedSongIndex >= 0 && savedSongIndex < songs.length) {
      setCurrentSongIndex(savedSongIndex);
    }
    if (savedIsPlaying !== null) {
      setIsPlaying(savedIsPlaying);
    }
  }, []);  // Runs only once on component mount

  // Save state to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {  // Ensure code runs in the browser environment
      localStorage.setItem('currentSongIndex', currentSongIndex);
      localStorage.setItem('isPlaying', JSON.stringify(isPlaying));
    }
  }, [currentSongIndex, isPlaying]);

  // Initialize audio element
  useEffect(() => {
    const audio = document.getElementById('audio');
    if (audio) {
      setAudioElement(audio);
      audio.volume = 0.4;

      // Add event listener for 'ended' event
      const handleEnded = () => {
        nextSong();
      };

      audio.addEventListener('ended', handleEnded);

      // Cleanup event listener on component unmount
      return () => {
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  // Update audio element and play/pause
  useEffect(() => {
    if (audioElement) {
      audioElement.src = songs[currentSongIndex];
      if (isPlaying) {
        audioElement.play().catch((error) => {
          console.error('Failed to play audio:', error);
        });
      } else {
        audioElement.pause();
      }
    }
  }, [isPlaying, audioElement, currentSongIndex]);

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const previousSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, setIsPlaying, nextSong, previousSong }}>
      {children}
      <audio id="audio" preload="auto">
        <source src={songs[currentSongIndex]} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </AudioContext.Provider>
  );
};