import React, { useState } from 'react'
import { NavigationC } from '../Components/NavigationC'
import { QuestionC } from '../Components/GamePage/QuestionC'
import { GameData } from '../Components/GamePage/GameData'
import { Answers } from '../Components/GamePage/Answers'
import { Button } from 'react-bootstrap'
import '../Styles/Game.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { TimeData } from '../Components/GamePage/TimeData'

import manCity from '../Imgs/manCty.png'
import manUtd from '../Imgs/manUtd.png'
import barca from '../Imgs/barca.png'
import realMad from '../Imgs/realMad.png'
import borussMonc from '../Imgs/BorussMonc.png'
import fiorentina from '../Imgs/fiorentina.png'
import lyon from '../Imgs/lyon.png'
import realSoc from '../Imgs/realSoc.png'
import basel from '../Imgs/basel.png'
import dinamoZg from '../Imgs/dinamoZg.png'
import hamburger from '../Imgs/hamburger.png'
import aek from '../Imgs/aek.png'
import sarajevo from '../Imgs/sarajevo.png'
import lech from '../Imgs/lech.png'
import sparta from '../Imgs/sparta.png'
import vitebsk from '../Imgs/vitebsk.png'
import psg from '../Imgs/psg.png'
import milan from '../Imgs/milan.png'
import chelsea from '../Imgs/chelsea.png'
import liverpool from '../Imgs/liverpool.png'
import inter from '../Imgs/inter.png'
import juventus from '../Imgs/juventus.png'
import bayernM from '../Imgs/bayernM.png'
import tott from '../Imgs/tott.png'
import galata from '../Imgs/galata.png'
import lazio from '../Imgs/lazio.png'
import valencia from '../Imgs/valencia.png'
import roma from '../Imgs/roma.png'
import arsenal from '../Imgs/arsenal.png'
import atlM from '../Imgs/atlM.png'
import napoli from '../Imgs/napoli.png'
import ajax from '../Imgs/ajax.png'
import banik from '../Imgs/banik.png'
import liberec from '../Imgs/liberec.png'
import viborg from '../Imgs/viborg.png'
import zoria from '../Imgs/zoria.png'
import levski from '../Imgs/levski.png'
import rosenborg from '../Imgs/rosenborg.png'
import slavSofia from '../Imgs/slavSofia.png'
import hamarby from '../Imgs/hamarby.png'
import celje from '../Imgs/celje.png'
import pyunik from '../Imgs/pyunik.png'
import zalgiris from '../Imgs/zalgiris.png'
import genk from '../Imgs/genk.png'
import vaduz from '../Imgs/vaduz.png'
import elfsborg from '../Imgs/elfsborg.png'
import wien from '../Imgs/wien.png'
import molde from '../Imgs/molde.png'
import basaksehir from '../Imgs/basaksehir.png'
import braga from '../Imgs/braga.png'
import hajduk from '../Imgs/hajduk.png'
import psv from '../Imgs/psv.png'
import cska from '../Imgs/cska.png'
import porto from '../Imgs/porto.png'
import crvZv from '../Imgs/crvZv.png'


export const GamePage = () => {
  const[ items,setItems ] = useState([
    //lvl1
    {
      id:1,
      question: manCity,
      correct:'Manchester City',
      correct1:'manchester city',
      correct2:'city',
      correct3:'City',
      lvl:1,
    },
    {
      id:2,
      question: manUtd,
      correct:'Manchester United',
      correct1:'manchester united',
      correct2:'Manchester United FC',
      correct3:'United',
      lvl:1,
    },
    {
      id:3,
      question: psg,
      correct:'Paris Saint-Germain',
      correct1:'Paris Saint Germain',
      correct2:'paris saint germain',
      correct3:'psg',
      lvl:1,
    },
    {
      id:4,
      question: liverpool,
      correct:'Liverpool',
      correct1:'liverpool',
      correct2:'Liverpool FC',
      correct3:'FC Liverpool',
      lvl:1,
    },
    {
      id:5,
      question: chelsea,
      correct:'Chelsea',
      correct1:'Chelsea FC',
      correct2:'chelsea',
      correct3:'FC Chelsea',
      lvl:1,
    },
    {
      id:6,
      question: milan,
      correct:'AC Milan',
      correct1:'Milan',
      correct2:'milan',
      correct3:'ac milan',
      lvl:1,
    },
    //lvl2
    {
      id:1,
      question: barca,
      correct:'Barcelona',
      correct1:'FC Barcelona',
      correct2:'barca',
      correct3:'barcelona',
      lvl:2,
    },
    {
      id:2,
      question: realMad,
      correct:'Real Madrid',
      correct1:'real madrid',
      correct2:'Real Madrid CF',
      correct3:'real madrid cf',
      lvl:2,
    },
    {
      id:3,
      question: tott,
      correct:'Tottenham hotspur',
      correct1:'Tottenham hotspur',
      correct2:'tottenham',
      correct3:'Tottenham',
      lvl:2,
    },
    {
      id:4,
      question: bayernM,
      correct:'Bayern Munich',
      correct1:'Bayern Munchen',
      correct2:'bayern munich',
      correct3:'bayern munchen',
      lvl:2,
    },
    {
      id:5,
      question: juventus,
      correct:'Juventus',
      correct1:'Juventus FC',
      correct2:'juventus',
      correct3:'FC Juventus',
      lvl:2,
    },
    {
      id:6,
      question: inter,
      correct:'Inter',
      correct1:'Inter Milan',
      correct2:'inter',
      correct3:'inter milan',
      lvl:2,
    },
    //lvl3
    {
      id:1,
      question:borussMonc,
      correct:'Borussia Mönchengladbach',
      correct1:'borussia monchengladbach',
      correct2:'Monchengladbach',
      correct3:'monchengladbach',
      lvl:3,
    },
    {
      id:2,
      question: fiorentina,
      correct:'Fiorentina',
      correct1:'fiorentina',
      correct2:'ACF Fiorentina',
      correct3:'acf fiorentina',
      lvl:3,
    },
    {
      id:3,
      question: arsenal,
      correct:'Arsenal',
      correct1:'arsenal',
      correct2:'Arsenal FC',
      correct3:'arsenal fc',
      lvl:3,
    },
    {
      id:4,
      question: atlM,
      correct:'Atletico Madrid',
      correct1:'atletico madrid',
      correct2:'Atletico de Madrid',
      correct3:'atlético de madrid',
      lvl:3,
    },
    {
      id:5,
      question: napoli,
      correct:'Napoli',
      correct1:'napoli',
      correct2:'SSC Napoli',
      correct3:'ssc napoli',
      lvl:3,
    },
    {
      id:6,
      question: ajax,
      correct:'Ajax',
      correct1:'ajax',
      correct2:'AFC Ajax',
      correct3:'Ajax Amsterdam',
      lvl:3,
    },
    //lvl4
    {
      id:1,
      question: lyon,
      correct:'Olympique Lyonnais',
      correct1:'Lyon',
      correct2:'lyon',
      correct3:'olympique lyonnais',
      lvl:4,
    },
    {
      id:2,
      question: realSoc,
      correct:'Real Sociedad',
      correct1:'Sociedad',
      correct2:'sociedad',
      correct3:'real sociedad',
      lvl:4,
    },
    {
      id:3,
      question: lazio,
      correct:'Lazio',
      correct1:'lazio',
      correct2:'SS Lazio',
      correct3:'ss lazio',
      lvl:4,
    },
    {
      id:4,
      question: roma,
      correct:'Roma',
      correct1:'roma',
      correct2:'AS ROMA',
      correct3:'as roma',
      lvl:4,
    },
    {
      id:5,
      question: valencia,
      correct:'Valencia',
      correct1:'valencia',
      correct2:'Valencia CF',
      correct3:'valencia cf',
      lvl:4,
    },
    {
      id:6,
      question: galata,
      correct:'Galtasaray',
      correct1:'galatasaray',
      correct2:'galatasaray sk',
      correct3:'Galatasaray SK',
      lvl:4,
    },
    //lvl5
    {
      id:1,
      question: basel,
      correct:'Basel',
      correct1:'FC Basel',
      correct2:'fc basel',
      correct3:'basel',
      lvl:5,
    },
    {
      id:2,
      question: dinamoZg,
      correct:'Dinamo Zagreb',
      correct1:'dinamo zagreb',
      correct2:'GNK Dinamo Zagreb',
      correct3:'gnk dinamo zagreb',
      lvl:5,
    },
    {
      id:3,
      question: crvZv,
      correct:'Crvena Zvezda',
      correct1:'crvena zvezda',
      correct2:'FK Crvena Zvezda',
      correct3:'fk crvena zvezda',
      lvl:5,
    },
    {
      id:4,
      question: porto,
      correct:'Porto',
      correct1:'porto',
      correct2:'FC Porto',
      correct3:'fc porto',
      lvl:5,
    },
    {
      id:5,
      question: cska,
      correct:'CSKA Moscow',
      correct1:'PFC CSKA Moscow',
      correct2:'cska',
      correct3:'cska moscow',
      lvl:5,
    },
    {
      id:6,
      question: psv,
      correct:'Psv',
      correct1:'psv',
      correct2:'PSV',
      correct3:'PSV Eindhoven',
      lvl:5,
    },
    //lvl6
    {
      id:1,
      question: hamburger,
      correct:'Hamburger SV',
      correct1:'hamburger sv',
      correct2:'hamburger',
      correct3:'Hamburger',
      lvl:6,
    },
    {
      id:2,
      question: aek,
      correct:'AEK Athens',
      correct1:'AEK Athens',
      correct2:'aek',
      correct3:'AEK',
      lvl:6,
    },
    {
      id:3,
      question: hajduk,
      correct:'Hajduk Split',
      correct1:'hajduk split',
      correct2:'HNK Hajduk split',
      correct3:'hnk hajduk split',
      lvl:6,
    },
    {
      id:4,
      question: braga,
      correct:'Braga',
      correct1:'braga',
      correct2:'SC Braga',
      correct3:'sc braga',
      lvl:6,
    },
    {
      id:5,
      question: basaksehir,
      correct:'basaksehir',
      correct1:'Basaksehir',
      correct2:'Istanbul Basaksehir',
      correct3:'istanbul basaksehir',
      lvl:6,
    },
    {
      id:6,
      question: molde,
      correct:'Molde',
      correct1:'molde',
      correct2:'Molde FK',
      correct3:'molde fk',
      lvl:6,
    },
    //lvl7
    {
      id:1,
      question: wien,
      correct:'Austria Wien',
      correct1:'austria wien',
      correct2:'FK Austria Wien',
      correct3:'fk austria wien',
      lvl:7,
    },
    {
      id:2,
      question: elfsborg,
      correct:'Elfsborg',
      correct1:'elfsborg',
      correct2:'IF Elfsborg',
      correct3:'if elfsborg',
      lvl:7,
    },
    {
      id:3,
      question: vaduz,
      correct:'Vaduz',
      correct1:'FC Vaduz',
      correct2:'vaduz',
      correct3:'fc vaduz',
      lvl:7,
    },
    {
      id:4,
      question: genk,
      correct:'Genk',
      correct1:'genk',
      correct2:'KRC Genk',
      correct3:'krc genk',
      lvl:7,
    },
    {
      id:5,
      question: zalgiris,
      correct:'Zalgiris',
      correct1:'zalgiris',
      correct2:'Zalgiris Kaunas',
      correct3:'zalgiris kaunas',
      lvl:7,
    },
    {
      id:6,
      question: pyunik,
      correct:'Pyunik',
      correct1:'pyunik',
      correct2:'FC Pyunik',
      correct3:'fc pyunik',
      lvl:7,
    },
    //lvl8
    {
      id:1,
      question: sarajevo,
      correct:'FK Sarajevo',
      correct1:'fk sarajevo',
      correct2:'sarajevo',
      correct3:'Sarajevo',
      lvl:8,
    },
    {
      id:2,
      question: hamarby,
      correct:'Hammarby Fotboll',
      correct1:'hammarby fotboll',
      correct2:'hammarby',
      correct3:'Hammarby',
      lvl:8,
    },
    {
      id:3,
      question: slavSofia,
      correct:'Slavia Sofia',
      correct1:'PFC Slavia Sofia',
      correct2:'slavia sofia',
      correct3:'pfc slavia sofia',
      lvl:8,
    },
    {
      id:4,
      question: celje,
      correct:'NK Celje',
      correct1:'nk celje',
      correct2:'celje',
      correct3:'Celje',
      lvl:8,
    },
    {
      id:5,
      question: rosenborg,
      correct:'Rosenborg BK',
      correct1:'Rosenborg',
      correct2:'rosenborg',
      correct3:'rosenborg bk',
      lvl:8,
    },
    {
      id:6,
      question: levski,
      correct:'Levski Sofia',
      correct1:'Levski',
      correct2:'levski sofia',
      correct3:'PFC Levski Sofia',
      lvl:8,
    },
    //lvl9
    {
      id:1,
      question: sparta,
      correct:'Sparta Praha',
      correct1:'sparta praha',
      correct2:'sparta prague',
      correct3:'Sparta Prague',
      lvl:9
    },
    {
      id:2,
      question: vitebsk,
      correct:'Vitebsk',
      correct1:'vitebsk',
      correct2:'FC Vitebsk',
      correct3:'fc vitebsk',
      lvl:9
    },
    {
      id:3,
      question: zoria,
      correct:'FC Zorya Luhansk',
      correct1:'Zorya Luhansk',
      correct2:'zorya luhansk',
      correct3:'Zorya',
      lvl:9
    },
    {
      id:4,
      question: viborg,
      correct:'Viborg',
      correct1:'FF Viborg',
      correct2:'viborg',
      correct3:'ff viborg',
      lvl:9
    },
    {
      id:5,
      question: liberec,
      correct:'FC Slovan Liberec',
      correct1:'Slovan Liberec',
      correct2:'slovan liberec',
      correct3:'fc slovan liberec',
      lvl:9
    },
    {
      id:6,
      question: banik,
      correct:'Banik Ostrava',
      correct1:'FC Banik Ostrava',
      correct2:'banik ostrava',
      correct3:'fc banik ostrava',
      lvl:9
    },
  ])

  const random = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  console.log(random,'reand')

  const {state} = useLocation()
  
  console.log(state.friend,'22')
  
  return (
    <div>
        <NavigationC />
        <TimeData />
        <GameData level={state.level} />
        {items.filter(items => (items.id === random && items.lvl === state.level)).map(items =>
          <>
            {items.question !== ''?
            <>
              <QuestionC question={items.question} />
              <Answers corrAnswer1={items.correct1} corrAnswer2={items.correct2} corrAnswer3={items.correct3} corrAnswer={items.correct}/>
            </>
            :
            <p>nema dalje</p>
            }
          </>
        )}
    </div>
  )
}
