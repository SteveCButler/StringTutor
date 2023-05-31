import React from 'react';
import Image from 'next/image';
import muddy from '../assets/muddyWater_poster.jpg';
import woody from '../assets/woodieGuthrie_poster.jpg';
import folkFest from '../assets/folkFestival_poster.jpg';
import dylan from '../assets/dylan_poster.jpg';
import monroe from '../assets/billMonroe_WSM_add.jpg';
import mitchell from '../assets/joniMitchell.jpg';

export default function Resources() {
  return (
    <>
      <div className="d-flex">
        <div className="text-white m-5">
          <h1>Resources</h1>
          <ul className="mt-3">
            <li>
              <a href="https://www.si.edu/spotlight/american-folk-music" target="_blank" rel="noreferrer">Smithsonian - American Folk Music Folkways</a>
            </li>
          </ul>
          <h4 className="mt-5">Recommended Listening</h4>
          <div className="mt-3">
            <ul className="mt-3">
              <li>
                <a href="https://folkways.si.edu/" target="_blank" rel="noreferrer">Smithsonian Folkways</a>
              </li>
            </ul>
          </div>
          <h4 className="mt-5">Tools</h4>
          <ul className="mt-3">
            <li>
              <a href="https://www.fender.com/online-guitar-tuner" target="_blank" rel="noreferrer">Online Tuner</a>
            </li>
            <li>
              <a href="https://www.metronomeonline.com/" target="_blank" rel="noreferrer">Online Metronome</a>
            </li>

          </ul>
        </div>
        <div className="mt-3 d-flex flex-wrap gap-4">
          <Image src={muddy} width="350" height="350" />
          <Image src={folkFest} width="350" height="350" />
          <Image src={woody} width="350" height="350" />
          <Image src={dylan} width="350" height="350" />
          <Image src={mitchell} width="350" height="350" />
          <Image src={monroe} width="350" height="350" />
        </div>
      </div>
    </>
  );
}
