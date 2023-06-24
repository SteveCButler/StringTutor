import React from 'react';
import Image from 'next/image';
import muddy from '../assets/muddyWater_poster.jpg';
import woody from '../assets/woodieGuthrie_poster.jpg';
import folkFest from '../assets/folkFestival_poster.jpg';
import dylan from '../assets/dylan_poster.jpg';

export default function Resources() {
  return (
    <>
      <title>Resources</title>
      <div className="w-75 mx-auto mt-3 ">
        <h1 className="text-white mt-3 ms-5">Resources</h1>

        <div className="d-flex justify-content-center flex-wrap ">
          <div className="mt-3 mb-3 me-5">
            <h4 className="mt-4 ms-5 light-green-text mb-4">Recommended Listening</h4>
            <ul>
              <li>
                <a href="https://www.si.edu/spotlight/american-folk-music" target="_blank" rel="noreferrer">Smithsonian - American Folk Music Folkways</a>
              </li>
              <li>
                <a href="https://folkways.si.edu/" target="_blank" rel="noreferrer">Smithsonian Folkways</a>
              </li>
              <li>
                <a href="https://www.wmot.org/">WMOT - Roots Radio</a>
              </li>
            </ul>
          </div>
          <div className="mt-3 mb-4 mx-5">
            <h4 className="mt-4 ms-5 mb-4 light-green-text">Tools</h4>
            <ul>
              <li>
                <a href="https://www.fender.com/online-guitar-tuner" target="_blank" rel="noreferrer">Online Tuner</a>
              </li>
              <li>
                <a href="https://www.metronomeonline.com/" target="_blank" rel="noreferrer">Online Metronome</a>
              </li>

            </ul>
          </div>
          <div className="mt-3 mb-4 mx-5">
            <h4 className="mt-4 ms-5 mb-4 light-green-text">Sites</h4>
            <ul>
              <li>
                <a href="https://www.mandolincafe.com/" target="_blank" rel="noreferrer">Mandolin Cafe</a>
              </li>
              <li>
                <a href="https://www.fiddlehangout.com/" target="_blank" rel="noreferrer">Fiddle Hangout</a>
              </li>
              <li>
                <a href="https://www.banjohangout.org/" target="_blank" rel="noreferrer">Banjo Hangout</a>
              </li>
              <li>
                <a href="https://www.flatpickerhangout.com/" target="_blank" rel="noreferrer">Flatpicker Hangout</a>
              </li>
              <li>
                <a href="https://pegheadnation.com/" target="_blank" rel="noreferrer">Peghead Nation</a>
              </li>

            </ul>
          </div>
        </div>
        <div className="mt-5 d-flex gap-3 justify-content-between">
          <Image src={muddy} width="275" height="275" />
          <Image src={folkFest} width="275" height="275" />
          <Image src={woody} width="275" height="275" />
          <Image src={dylan} width="275" height="275" />
        </div>
      </div>
    </>
  );
}
