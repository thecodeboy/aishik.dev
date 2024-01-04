export default function Home() {
  return (
    <main>
      <div className="antialiased">
        <header className="flex flex-col items-start">
          <a className="text-medium inline-block font-medium no-underline" href="/">Aishik Saha</a>
          <span className="text-medium font-medium leading-none text-gray-500">Senior Software Engineer</span>
        </header>
      </div>
      <div className="mt-40">
        <h1>Hello there!</h1>
        I&apos;m a senior software engineer working at ServiceNow. I like building platforms and distributed systems.
      </div>
      <div className="mt-10">
        Connect with me on <a className="underline" href="https://www.linkedin.com/in/thecodeboy">LinkedIn</a>.
      </div>
    </main>
  )
}
