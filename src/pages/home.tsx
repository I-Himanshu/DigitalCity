

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center w-full bg-cover bg-white px-[10vmin] lg:px-[20vmin] bg-[url(/Home/Mobilebackground.png)] lg:bg-[url(/Home/Background.svg)]">
      <p className="font-bold text-[#3852CE] text-[8vmin] mt-[30vmin] lg:mt-0">Digital TownHall</p>
      <p className="font-bold text-[#000] text-[6vmin] leading-[5.1vmin]">Modern people, Modern town</p>
      <p className="text-[#aaa] text-[2.5vmin] mt-[5vmin] lg:max-w-[35vw] tracking-[0.2vmin]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora doloribus iusto voluptatibus expedita dicta dolore molestias perferendis, voluptatum unde assumenda eos reprehenderit culpa ipsam similique fugit quas rem ea laborum?</p>
      <button className="bg-[#3852ce] rounded-sm shadow-sm text-white text-[3.5vmin] transition-all hover:bg-[#3852ce]/80 p-[2vmin] max-w-[30vmin] mt-[5vmin]">Get Started</button>
    </main>
  )
}
