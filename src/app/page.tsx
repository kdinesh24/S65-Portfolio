import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 1rem"}}>
      {/* Hero Section */}
      <section style={{padding: "5rem 0", textAlign: "center"}}>
        <div style={{maxWidth: "56rem", margin: "0 auto"}}>
          <p style={{color: "#93c5fd", marginBottom: "1rem"}}>Hey! My name is Your Name!</p>
          <h1 style={{fontSize: "3rem", fontWeight: "bold", marginBottom: "2rem", lineHeight: "1.1"}}>
            I create webpages that transform your visitors into clients!
          </h1>
          <p style={{fontSize: "1.25rem", color: "#9ca3af", marginBottom: "3rem"}}>
            I am a fervent web design enthusiast. My commitment lies in
            creating aesthetically stunning and operationally vigorous websites.
          </p>
          <div style={{display: "flex", gap: "1rem", justifyContent: "center"}}>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link href="/work" className="btn-secondary">
              See my work
            </Link>
          </div>
        </div>
      </section>

      {/* Other sections can be added back once the basic setup is working */}
    </div>
  )
}