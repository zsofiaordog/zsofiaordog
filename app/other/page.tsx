"use client";

import { useState } from "react";
import Header from "@/components/Header";

type Video = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  vimeoId: string;
  thumbnail?: string;
};

export default function OtherPage() {
  const [lightMode, setLightMode] = useState(true);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const videos: Video[] = [
    {
      id: "1",
      title: "Inspired by Société - A fashion film by Bálint Szimler (2017)",
      description:"",
      longDescription: `"You are what you see and not what you seem." - This film was created as one of the first projects Inspired by Société by director Bálint Szimler and D.O.P Marcell Rév.
      
      Director: Bálint Szimler
      Cinematographer: Marcell Rév
      Editor: Zsófia Ördög
      Sound: Viktor Lente
      Music: Péter Sabák"`,
      vimeoId: "467448366",
      thumbnail: "/OTHER/societe2.jpg",
    },
    {
      id: "2",
      title: "THE QUALITONS - Zöld - Sárga (2019)",
      description:"",
      longDescription: `
      
      rendező - Kiss Domonkos
      operatőr - Szemerey Bence
      vágó - Ördög Zsófia
      3D szimuláció - Lányi Zoltán
      animáció - Pálos Róbert, Kiss Domonkos
      3D scan - Pénzes Bence, Pálos Róbert
      modellezés - Kiss Domonkos, Szirmai Balázs
      főcím grafika - Kiss Benedek
      helyszíni hang - Kiss Gergely Ábel
      stylist - Németh Juci
      werk - Szatmári Bendegúz, Pénzes Bence
      szakmai konzulens - Sánta Balázs`,
      vimeoId: "944436578",
      thumbnail: "/OTHER/qualitons.jpg",
    },
    {
      id: "5",
      title: "EGGSPERIMENT (2022)",
      description:"",
      longDescription: `Dancefilm by Baltic Film and Media students (2022) 
     
      Starring: Irina Pähn 
      Choreography by Aneta Varts, David Truusa 
      Cinematography by Camilo Villamizar Plazas 
      Edited by Zsófia Ördög 
      Sound Design by Diego Aguilar Gutiérrez,`,
      vimeoId: "716475220",
      thumbnail: "/OTHER/egg3.jpg",
    },
    {
      id: "4",
      title: "I Spoke to Fire at Midnight (2021)",
      description:"",
      longDescription: `Trailer by Universidade Lusófona students (2021) 
      
      Starring Valerie Bradell, 
      Sara Vujadinovic and Nazih Khalife 
      Directed by Pedro Hasrouny 
      Produced by Paco Zavala 
      Written by Filip Jokanovic 
      Cinematography by Nela Khalfieva 
      Edited by Zsófia Ördög 
      Sound Design by Fernando Torres`,
      vimeoId: "673882907",
      thumbnail: "/OTHER/fire.jpg",
    },
    {
      id: "3",
      title: "5 Minutes with Clémentina (2023)",
      description:"",
      longDescription: `Clémentina's acts of murder have been normalised as she pursues viral fame.
      
      Director/Writer: Pedro Hasrouny
      Starring: Maria João Vaz
      Cinematographer: Marina Tebechrani
      Poducer: Malu Lins
      Music: Sangam Panta
      Editor: Zsófia Ördög`,
      vimeoId: "1205243184",
      thumbnail: "/OTHER/Clementina_SaoPaulo.png",
    },
    {
      id: "6",
      title: "Weep Not, Dear Sea (2022)",
      description:"",
      longDescription: `Trailer by KEM7 students (2022) 
      
      Director: Salvador Alejandro Gutiérrez 
      Writer: Nusrat Islam Maati 
      Cinematographer: Bornil Anurag 
      Producer: Katniss Tung Cheng 
      Editor: Zsófia Ördög 
      Sound: Mariana von Seckendorff`,
      vimeoId: "718818974",
      thumbnail: "/OTHER/weep.jpg",
    },
    {
      id: "7",
      title: "BPM - Vol2. - HipHop (2013)",
      description:"",
      longDescription: `An episode of Beats per Minute, a short educational series explaining different musical genres. 
      
      Directed by Bálint Szimler, Dávid Kemény 
      Produced by Zoltán Rozgonyi 
      Written by Ferenc Kömlődi, Zsolt Prieger 
      Cinematography by Zágon Nagy E
      dited by Zsófia Ördög 
      Sound Design by Báint Seres`,
      vimeoId: "467407189",
      thumbnail: "/OTHER/bpm2.jpg",
    },
    {
      id: "8",
      title: "BPM - Vol3. - Techno (2013)",
      description:"",
      longDescription: `An episode of Beats per Minute, a short educational series explaining different musical genres. 
      
      Directed by Bálint Szimler, Dávid Kemény 
      Produced by Zoltán Rozgonyi 
      Written by Ferenc Kömlődi, Zsolt Prieger 
      Cinematography by Zágon Nagy 
      Edited by Zsófia Ördög 
      Sound Design by Pál Somló, Viktor Lente`,
      vimeoId: "465084288",
      thumbnail: "/OTHER/bpm3.jpg",
    },
    {
      id: "9",
      title: "BPM - Vol.4 Rewind (2013)",
      description:"",
      longDescription: `An episode of Beats per Minute, a short educational series explaining different musical genres. 
      Directed by Bálint Szimler, Dávid Kemény 
      Produced by Zoltán Rozgonyi 
      Written by Ferenc Kömlődi, Zsolt Prieger 
      Cinematography by Zágon Nagy 
      Edited by Zsófia Ördög 
      Sound Design by Pál Somló, Viktor Lente`,
      vimeoId: "467407426",
      thumbnail: "/OTHER/bpm4.jpg",
    },
    {
      id: "10",
      title: "Lerobbant Trabant",
      description:"",
      longDescription: `DOP - Kristóf Deák`,
      vimeoId: "465074732",
      thumbnail: "/OTHER/trabant.jpg",
    },
    {
      id: "11",
      title: "StereoAkt - LGBTQ campaign (2015)",
      description:"",
      longDescription: `Directed by Martin Boross`,
      vimeoId: "467412753",
      thumbnail: "/OTHER/stereo.jpg",
    },
  ];

  const bg = lightMode ? "bg-white" : "bg-black";
  const text = lightMode ? "text-black" : "text-[#f3d8df]";

  return (
    <main className={`min-h-screen ${bg} ${text}`}>

      <Header lightMode={lightMode} />

      {/* GRID */}
      <div className="max-w-6xl mx-auto pt-28 md:pt-30 px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer">

              <div
                className="relative aspect-video overflow-hidden bg-black"
                onClick={() => setActiveVideo(video)}
              >

                <img
                  src={video.thumbnail || `https://vumbnail.com/${video.vimeoId}.jpg`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-0"
                  alt={video.title}
                />

                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}?background=1&muted=1&loop=1`}
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  allow="autoplay; fullscreen"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition" />
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-7xl grid grid-cols-1 md:grid-cols-[2.2fr_1fr] gap-8 md:gap-10"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://player.vimeo.com/video/${activeVideo.vimeoId}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="relative flex flex-col justify-start">

              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-0 right-0 text-white/80 hover:text-white transition"
              >
                ✕
              </button>

              <h2 className="text-lg md:text-2xl uppercase tracking-[0.22em] text-white pr-10">
                {activeVideo.title}
              </h2>

              <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed whitespace-pre-line">
                {activeVideo.longDescription}
              </p>

            </div>

          </div>
        </div>
      )}

      {/* TOGGLE (SAME AS BIO PAGE) */}
      <button
        onClick={() => setLightMode(!lightMode)}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative w-14 h-8 flex items-center rounded-full px-1 bg-white/10">

          <svg className="absolute left-2 w-3.5 h-3.5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>

          <svg className="absolute right-2 w-3.5 h-3.5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>

          <div
            className={`h-6 w-6 rounded-full shadow-md transform transition-all duration-300 ${
              lightMode ? "translate-x-6 bg-white" : "translate-x-0 bg-[#f3d8df]"
            }`}
          />
        </div>
      </button>
      
      {/* FOOTER */}
      <footer className="w-full mt-20 py-12 text-center text-xs uppercase tracking-[0.3em] opacity-50">
        © {new Date().getFullYear()} All Rights Reserved
      </footer>

    </main>
  );
}