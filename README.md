// for gsap
npm install gsap
npm install @gsap/react react-responsive

// other dependancies
tailwind

// to create a smooth scrolling video
ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4
