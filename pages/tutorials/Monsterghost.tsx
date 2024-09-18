import React from "react";
import type { NextPage } from "next";
import Nav from "../../components/Nav";
import Image from "next/image";
import Head from "next/head";

const monster: NextPage = () => {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
      <Head>
      <title>Monster - MorningMoon Village</title>
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
    <h2 className="font-semibold text-gray-800">Jello-Bello Spirit</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 56</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterghost/Jello-Bello Spirit.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
  </div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-amber-500">ความเสียหาย Lighting  : 30-50</h2>
    <h2 className="font-semibold text-cyan-500">ความเสียหาย Chaos  : 25-30</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 10</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การทุบ (กระบอง) </h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 50</p>
          <p className="text-red-500">Fire : 25</p>
          <p className="text-cyan-500">Cold : 40</p>
          <p className="text-amber-500">Lightning : 40</p>
          <p className="text-purple-700">Chaos : 0</p>
        </div>
 </div>
 <div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Cacto Spirit</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 75</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterghost/Cacto Spirit.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
  </div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-purple-500">ความเสียหาย Chaos  : 38-47</h2>
    <h2 className="font-semibold text-amber-500">ความเสียหาย Lighning  : 20-36</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 18</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ :  การตัดไม้ (ขวาน) </h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 50</p>
          <p className="text-red-500">Fire : 10</p>
          <p className="text-cyan-500">Cold : 30</p>
          <p className="text-amber-500">Lightning : 65</p>
          <p className="text-purple-700">Chaos : 15</p>
        </div>
 </div>
 <div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Rock Golem Spirit</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 116</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterghost/Rock Golem Spirit.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
  </div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-purple-500">ความเสียหาย Cold  : 51-68</h2>
    <h2 className="font-semibold text-amber-500">ความเสียหาย Fire  : 12-17</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 30</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ :  การทุบหิน (ค้อน)   </h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 50</p>
          <p className="text-red-500">Fire : 80</p>
          <p className="text-cyan-500">Cold : 0</p>
          <p className="text-amber-500">Lightning : 50</p>
          <p className="text-purple-700">Chaos : 10</p>
        </div>
 </div>
 <div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Treant spirit</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 192</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterghost/Treant spirit.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
  </div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-amber-500">ความเสียหาย Lighning  : 93-123</h2>
    <h2 className="font-semibold text-cyan-500">ความเสียหาย Cold  : 29-35</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 115</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การตัดไม้ (ขวาน)    </h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 60</p>
          <p className="text-red-500">Fire : 10</p>
          <p className="text-cyan-500">Cold : 45</p>
          <p className="text-amber-500">Lightning : 80</p>
          <p className="text-purple-700">Chaos : 65</p>
        </div>
 </div>
 <div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Magma Golem Spirit</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 201</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterghost/Magmags.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
  </div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-amber-500">ความเสียหาย Fire  : 106-129</h2>
    <h2 className="font-semibold text-cyan-500">ความเสียหาย Lighning  : 19-26</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 115</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การทุบหิน (ค้อน)     </h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 60</p>
          <p className="text-red-500">Fire : 90</p>
          <p className="text-cyan-500">Cold : 10</p>
          <p className="text-amber-500">Lightning : 55</p>
          <p className="text-purple-700">Chaos : 45</p>
        </div>
 </div>
 <div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Hedgenox Spirit</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 184</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterghost/Hedgenox Spirit.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
  </div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-purple-500">ความเสียหาย Chaos  : 104-142</h2>
    <h2 className="font-semibold text-cyan-500">ความเสียหาย Cold  : 14-20</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 115</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การทุบ (กระบอง)     </h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 60</p>
          <p className="text-red-500">Fire : 50</p>
          <p className="text-cyan-500">Cold : 80</p>
          <p className="text-amber-500">Lightning : 60</p>
          <p className="text-purple-700">Chaos : 10</p>
        </div>
 </div>
 <div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Shimmer Spirit</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 196</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterghost/Shimmer Spirit.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
  </div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-cyan-500">ความเสียหาย Cold  : 97-115</h2>
    <h2 className="font-semibold text-red-500">ความเสียหาย Fire  : 30-38</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 115</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ :การขุดแร่ (Pickaxe)  </h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 60</p>
          <p className="text-red-500">Fire : 70</p>
          <p className="text-cyan-500">Cold : 70</p>
          <p className="text-amber-500">Lightning : 10</p>
          <p className="text-purple-700">Chaos : 50</p>
        </div>
 </div>
 <div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Gigatron Spirit</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 349</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterghost/Gigatron Spirit.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
  </div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-amber-500">ความเสียหาย Lighning  : 109-159</h2>
    <h2 className="font-semibold text-cyan-500">ความเสียหาย Cold  : 55-78</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 115</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ :การขุดแร่ (Pickaxe)  </h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 70</p>
          <p className="text-red-500">Fire : 65</p>
          <p className="text-cyan-500">Cold : 65</p>
          <p className="text-amber-500">Lightning : 25</p>
          <p className="text-purple-700">Chaos : 65</p>
        </div>
 </div>
 <div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Guardian of Gaia Spirit</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 352</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterghost/Guardiangs.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
  </div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">ความเสียหาย Fire  : 138-168</h2>
    <h2 className="font-semibold text-purple-500">ความเสียหาย Chaos  : 36-58</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 220</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ :การตัดไม้ (ขวาน)   </h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 70</p>
          <p className="text-red-500">Fire : 25</p>
          <p className="text-cyan-500">Cold : 45</p>
          <p className="text-amber-500">Lightning : 90</p>
          <p className="text-purple-700">Chaos : 60</p>
        </div>
 </div>
 <div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Terra Golem Spirit</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 363</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterghost/Terrags.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
  </div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-cyan-500">ความเสียหาย Cold  : 145-157</h2>
    <h2 className="font-semibold text-red-500">ความเสียหาย Fire  : 38-62</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 220</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ :การทุบหิน (ค้อน)    </h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 70</p>
          <p className="text-red-500">Fire : 90</p>
          <p className="text-cyan-500">Cold : 25</p>
          <p className="text-amber-500">Lightning : 70</p>
          <p className="text-purple-700">Chaos : 35</p>
        </div>
 </div>
 <div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Crocobeast Spirit</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 345 </h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monsterghost/Crocobeast Spirit.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
  </div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-purple-500">ความเสียหาย Chaos  : 137-178</h2>
    <h2 className="font-semibold text-cyan-500">ความเสียหาย Cold  : 41-47</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 220</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ :การทุบ (กระบอง)  </h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 70</p>
          <p className="text-red-500">Fire : 60</p>
          <p className="text-cyan-500">Cold : 90</p>
          <p className="text-amber-500">Lightning : 45</p>
          <p className="text-purple-700">Chaos : 25</p>
        </div>
 </div>


</div>
</div>
</div>

              
    );
};

export default monster;
