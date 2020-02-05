const gradients = [
  `linear-gradient(${~~(Math.random()*360)}deg, #1CB5E0 0%, #000851 100%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, rgba(255,112,110,1) 3%, rgba(183,24,255,1) 97%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, #00C9FF 0%, #92FE9D 100%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, #FC466B 0%, #3F5EFB 100%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, #0700b8 0%, #00ff88 100%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, #00d2ff 0%, #3a47d5 100%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, #f8ff00 0%, #3ad59f 100%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, rgba(79,255,185,1) 0%, rgba(50,219,255,1) 100%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, rgba(111,255,157,1) 3%, rgba(183,24,255,1) 97%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, rgba(111,255,157,1) 3%, rgba(24,176,255,1) 97%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, rgba(111,255,157,1) 3%, rgba(255,252,0,1) 97%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, rgba(255,236,111,1) 3%, rgba(255,50,50,1) 97%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, rgba(181,111,255,1) 3%, rgba(255,50,50,1) 97%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, rgba(255,111,242,1) 3%, rgba(255,50,50,1) 97%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, rgba(249,111,255,1) 3%, rgba(50,240,255,1) 97%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, rgba(249,111,255,1) 3%, rgba(114,71,255,1) 97%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, rgba(111,126,255,1) 3%, rgba(71,255,247,1) 97%)`,
  `linear-gradient(${~~(Math.random()*360)}deg, rgba(255,253,111,1) 3%, rgba(71,255,247,1) 97%)`
]


export default function fancyCssGradient(){
  return gradients[~~(gradients.length * Math.random())]
}
