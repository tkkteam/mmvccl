import React from "react";
import type { NextPage } from "next";
import Nav from "../../components/Nav";
import Image from "next/image";
import Head from "next/head";

const monster: NextPage = () => {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
      <Head>
      <title>Monster IsLand - MorningMoon Village</title>
      </Head>
      <Nav/>
      <div className="sm:max-w-screen-xl gap-y-4 container flex flex-col self-center flex-1 p-4">
      <Image 
            width={1400}
            height={95}
            src="https://commumorning.firebaseapp.com/monster/monsterbanner.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
          />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Pook Pooi</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 95</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Pook Pooi.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
     
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 60-93</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 18</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การทุบ (กระบอง)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 0</p>
          <p className="text-red-500">Fire : 20</p>
          <p className="text-cyan-500">Cold : 60</p>
          <p className="text-amber-500">Lightning : 30</p>
          <p className="text-purple-700">Chaos : 5</p>
        </div>
 </div>
</div>

<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Jibi</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 92</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Jibi.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
     
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 63 - 95</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 18</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การทุบ (กระบอง)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 0</p>
          <p className="text-red-500">Fire : 30</p>
          <p className="text-cyan-500">Cold : 60</p>
          <p className="text-amber-500">Lightning : 35</p>
          <p className="text-purple-700">Chaos : 0</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Funga</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 110</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Funga.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
    
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 32 - 55</h2>
    <h2 className="font-semibold text-red-500">การโจมตี Fire : 35 - 59</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 30</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การตัดไม้ (ขวาน)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 10</p>
          <p className="text-red-500">Fire : 5</p>
          <p className="text-cyan-500">Cold : 30</p>
          <p className="text-amber-500">Lightning : 60</p>
          <p className="text-purple-700">Chaos : 35</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Chippy</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 129</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Chippy.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
     
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 85 - 115</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 48</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การทุบ (กระบอง)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 15</p>
          <p className="text-red-500">Fire : 35</p>
          <p className="text-cyan-500">Cold : 70</p>
          <p className="text-amber-500">Lightning : 35</p>
          <p className="text-purple-700">Chaos : 10</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Echo</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 101</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Echo.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
    
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 36 - 58</h2>
    <h2 className="font-semibold text-amber-500">การโจมตี Lighting :  34 - 69</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 30</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การทุบ (กระบอง)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 5</p>
          <p className="text-red-500">Fire : 25</p>
          <p className="text-cyan-500">Cold : 60</p>
          <p className="text-amber-500">Lightning : 25</p>
          <p className="text-purple-700">Chaos : 5</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Striker</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 145</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Striker.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
     
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 48 - 68</h2>
    <h2 className="font-semibold text-red-500">การโจมตี Fire : 30 - 47</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 48</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การตัดไม้ (ขวาน)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 25</p>
          <p className="text-red-500">Fire : 15</p>
          <p className="text-cyan-500">Cold : 30</p>
          <p className="text-amber-500">Lightning : 60</p>
          <p className="text-purple-700">Chaos : 15</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Dirty Funga</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 141</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Dirty Funga.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 41 - 63</h2>
    <h2 className="font-semibold text-purple-700">การโจมตี Chaos : 43 - 59</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 48</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การตัดไม้ (ขวาน)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 15</p>
          <p className="text-red-500">Fire : 10</p>
          <p className="text-cyan-500">Cold : 35</p>
          <p className="text-amber-500">Lightning : 70</p>
          <p className="text-purple-700">Chaos : 40</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Ivy</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 177</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Ivy.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
     
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 43 - 65</h2>
    <h2 className="font-semibold text-purple-700">การโจมตี Chaos : 38 - 87</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 75</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การตัดไม้ (ขวาน)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 20</p>
          <p className="text-red-500">Fire : 5</p>
          <p className="text-cyan-500">Cold : 30</p>
          <p className="text-amber-500">Lightning : 75</p>
          <p className="text-purple-700">Chaos : 35</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">White Jibi</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 102</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/White Jibi.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
     
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 35 - 56</h2>
    <h2 className="font-semibold text-amber-500">การโจมตี Lightning : 32 - 68</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 30</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การทุบ (กระบอง)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 10</p>
          <p className="text-red-500">Fire : 30</p>
          <p className="text-cyan-500">Cold : 60</p>
          <p className="text-amber-500">Lightning : 60</p>
          <p className="text-purple-700">Chaos : 5</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Thun-Thun</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 137</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Thun-Thun.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
    
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 31 - 47</h2>
    <h2 className="font-semibold text-amber-500">การโจมตี Lightning : 42 - 85</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 48</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การทำลายหิน (ค้อน)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 25</p>
          <p className="text-red-500">Fire : 60</p>
          <p className="text-cyan-500">Cold : 5</p>
          <p className="text-amber-500">Lightning : 45</p>
          <p className="text-purple-700">Chaos : 15</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Twister</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 186</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Twister.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
    
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 48 - 84</h2>
    <h2 className="font-semibold text-purple-500">การโจมตี Chaos : 39 - 63</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 75</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การทำลายหิน (ค้อน)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 20</p>
          <p className="text-red-500">Fire : 70</p>
          <p className="text-cyan-500">Cold : 15</p>
          <p className="text-amber-500">Lightning : 40</p>
          <p className="text-purple-700">Chaos : 25</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Giga Jibi</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 189</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Giga Jibi.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 51 - 71</h2>
    <h2 className="font-semibold text-amber-500">การโจมตี Lightning : 35 - 68</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 18</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การทุบ (กระบอง)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 20</p>
          <p className="text-red-500">Fire : 35</p>
          <p className="text-cyan-500">Cold : 75</p>
          <p className="text-amber-500">Lightning : 40</p>
          <p className="text-purple-700">Chaos : 5</p>
        </div>
 </div>
</div>

<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Viper</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 107</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Viper.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
    
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 39 - 60</h2>
    <h2 className="font-semibold text-purple-500">การโจมตี Chaos : 37 - 62</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 30</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การทุบ (กระบอง)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 10</p>
          <p className="text-red-500">Fire : 20</p>
          <p className="text-cyan-500">Cold : 60</p>
          <p className="text-amber-500">Lightning : 20</p>
          <p className="text-purple-700">Chaos : 10</p>
        </div>
 </div>
</div>

<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Eggnite</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 142</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Eggnite.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
    
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 41 - 64</h2>
    <h2 className="font-semibold text-cyan-500">การโจมตี Cold : 28 - 57</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 48</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การขุด (Pickaxe) </h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 25</p>
          <p className="text-red-500">Fire : 40</p>
          <p className="text-cyan-500">Cold : 40</p>
          <p className="text-amber-500">Lightning : 10</p>
          <p className="text-purple-700">Chaos : 50</p>
        </div>
 </div>
</div>


<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Ruin Guard</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 203</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Ruin Guard.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
    
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 98 - 169</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 115</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การขุด (Pickaxe) </h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 30</p>
          <p className="text-red-500">Fire : 60</p>
          <p className="text-cyan-500">Cold : 60</p>
          <p className="text-amber-500">Lightning : 10</p>
          <p className="text-purple-700">Chaos : 60</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Varin</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 382</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Varin.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
    
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 66 - 88</h2>
    <h2 className="font-semibold text-purple-500">การโจมตี Chaos : 89 - 127</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 170</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การขุด (Pickaxe) </h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 40</p>
          <p className="text-red-500">Fire : 70</p>
          <p className="text-cyan-500">Cold : 55</p>
          <p className="text-amber-500">Lightning : 15</p>
          <p className="text-purple-700">Chaos : 65</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Garun</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 377</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Garun.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
    
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 51 - 76</h2>
    <h2 className="font-semibold text-red-500">การโจมตี Fire : 101 - 149</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 170</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การทุบ (กระบอง)  </h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 40</p>
          <p className="text-red-500">Fire : 60</p>
          <p className="text-cyan-500">Cold : 70</p>
          <p className="text-amber-500">Lightning : 40</p>
          <p className="text-purple-700">Chaos : 20</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Shinzu</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 395</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterIsland/Shinzu.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
    
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 57 - 82</h2>
    <h2 className="font-semibold text-amber-500">การโจมตี Lighting : 60 - 166</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 170</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การตัดไม้ (ขวาน)  </h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 40</p>
          <p className="text-red-500">Fire : 20</p>
          <p className="text-cyan-500">Cold : 50</p>
          <p className="text-amber-500">Lightning : 80</p>
          <p className="text-purple-700">Chaos : 40</p>
        </div>
 </div>
</div>

</div>
</div>
</div>

              
    );
};

export default monster;
