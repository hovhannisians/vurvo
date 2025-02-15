<a href="https://vurvo.robiai.com">
  <img alt="Vurvo – AI-Powered Mock Interviews" src="https://i.ibb.co/5nSrKF6/opengraph-image.jpg" style="max-width: 100%;">
  <h1 align="center">Vurvo Interviews</h1>
</a>

<p align="center">
  Mock Interview Simulator with AI-Powered Feedback
</p>

<p align="center">
  <a href="https://twitter.com/alenfromrobi">
    <img src="https://img.shields.io/twitter/follow/alenfromrobi?style=flat&label=Follow&logo=twitter&color=0bf&logoColor=fff" alt="Robi CEO's follower count" />
  </a>
  <a href="https://github.com/hovhannisians/vurvo">
    <img src="https://img.shields.io/github/stars/hovhannisians/vurvo?label=hovhannisians%2FVurvo" alt="Vurvo repo star count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#tech-stack--features"><strong>Tech Stack + Features</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## Introduction

Vurvo is an interview preparation tool that provides AI feedback on your mock interviews.

## Tech Stack + Features

![Landing Page](https://i.ibb.co/rZVXMKF/landing.jpg)

![Interview Selection](https://i.ibb.co/TYVVv21/interviews.jpg)

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience

### Platforms

- [Netlify](https://netlify.com/) – Easily preview & deploy changes with git
- [Upstash](https://upstash.com/) - Serverless Data Platform (here using serverless Redis for rate limiting)

### UI

- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [`ImageResponse`](https://beta.nextjs.org/docs/api-reference/image-response) – Generate dynamic Open Graph images at the edge
- [HeadlessUI](https://headlessui.com/) - Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### Miscellaneous

- [FFMPEG.WASM](https://ffmpegwasm.netlify.app/) – Transcode video/audio files
- [React Webcam](https://github.com/mozmorris/react-webcam) - Webcam component for React
- [Stripe Gradient Animation](https://whatamesh.vercel.app/) - [@jordienr](https://twitter.com/jordienr) released a Mesh Gradient that uses WebGL and animates a beautiful gradient

## How it all works

Vurvo uses FFmpeg to transcode the raw video into MP3. Chrome, Safari, and Firefox all record with different codecs, and FFmpeg is great for standardizing them.

We then send the audio directly to be transcribed by OpenAI's Whisper endpoint, and then stream feedback from the edge using OpenAI's gpt-3.5-turbo.

## Author

- Alen Hovhannisians ([@alenfromrobi](https://twitter.com/alenfromrobi))
