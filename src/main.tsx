import React from 'react';
import ReactDOM from 'react-dom/client';
import parseSong from 'songbook-chordpro';
import SongView from './SongView';

const CONTENT = `
{artist: Chinaski}
{title: Víno}
{capo: 1}

{start_of_verse: Sloha 1}
[C]             [G]               
Zase je pátek a mám toho dost,
       [B]              [F]
tak beru kramle, za zády Černý most.
[C]             [G]     
A pokud mi to D1 dovolí, 
       [B]              [F]
než minu Jihlavu, hodím Prahu za hlavu.
[C]             [G]            
Jedu jak Pražák, hlava nehlava,
      [B]              [F]
mám jediný cíl a přede mnou je Pálava.
[C]             [G]          
Už od Brna jsem jako na trní,
    [B]           [G]
ta sladká píseň tak blízko zní.
{end_of_verse}

{start_of_chorus: Refrén}
[C]          [G]  
My máme rádi víno,
 [B]       [F]
milujeme krásné ženy a zpěv.
[C]            [G]   
A na věc jdeme přímo,
 [B]            [F]
v žilách nám proudí moravská krev.
[C]          [G]  
My máme rádi víno,
 [B]       [F]
milujeme krásné ženy a zpěv.
[C]            [G]   
A na věc jdeme přímo,
 [B]            [F]
v žilách nám proudí moravská krev.
{end_of_chorus}
`.trim();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SongView song={parseSong(CONTENT)} />
  </React.StrictMode>
);
