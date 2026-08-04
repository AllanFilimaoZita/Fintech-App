import { FaEye } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { RiHotspotFill } from "react-icons/ri";
import { RiGalleryView2 } from "react-icons/ri";
import { MdLocalHospital } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa6";
import { RiUploadCloudFill } from "react-icons/ri";
import { RiGraduationCapFill } from "react-icons/ri";
import { BsLightningChargeFill } from "react-icons/bs";



import Card from '../components/Card'
import Clipers from '../components/Clipers'


function Home() {

    return (

        <div className="min-w-screen min-h-screen flex flex-col justify-center items-center py-4 bg-linear-to-b from-teal-900 to-gray-900">
            <header className="w-full flex items-center justify-between px-4 ">
                <div className="">
                    <p className="text-gray-500">Bom dia,</p>
                    <h2 className="text-xl text-white font-bold">Allan Zita</h2>
                </div>
                <div className="border border-white/20 bg-white/10 rounded-full p-2 flex items-center justify-center">
                    <IoMdSettings className="size-6 text-white" />
                </div>
            </header>

            <section className="w-full  flex flex-col justify-center p-4">
                <p className="text-gray-600">Saldo</p>
                <h2 className="text-white text-2xl font-bold flex items-center gap-2">$12.732.51 <FaEye /> </h2>

                <div className="flex items-center justify-between mt-5 gap-4">
                    <Card>
                        <FaPlusCircle className="text-white size-6" />

                        <p className="font-bold text-white">Top Up</p>
                    </Card>
                    <Card>
                        <RiUploadCloudFill className="text-white size-6" />

                        <p className="font-bold text-white">Transfer</p>
                    </Card>
                    <Card>
                        <FaMoneyBillWave className="text-white size-6" />

                        <p className="font-bold text-white">Withdraw</p>
                    </Card>
                </div>
            </section>

            <section className="bg-white w-full p-4 flex flex-col rounded-2xl">
                <h2>Services</h2>

                <div className="grid grid-flow-col grid-rows-2 gap-8">
                    
                    <Clipers>
                        <p className="text-orange-500 text-xl border border-orange-500 p-4 rounded-full">
                            <BsLightningChargeFill />
                        </p>

                        <p>
                            Electricity
                        </p>
                    </Clipers>
                    <Clipers>
                        <p className="text-green-700 text-xl border border-green-700 p-4 rounded-full">
                            <RiGraduationCapFill />
                        </p>

                        <p>
                            Education
                        </p>
                    </Clipers>
                    <Clipers>
                        <p className="text-red-700 text-xl border border-red-700 p-4 rounded-full">
                            <FaRegCalendarAlt />
                        </p>

                        <p>
                            Bills
                        </p>
                    </Clipers>
                    <Clipers>
                        <p className="text-violet-800 text-xl border border-violet-800 p-4 rounded-full">
                            <RiHotspotFill />
                        </p>

                        <p>
                            Internet...
                        </p>
                    </Clipers>
                    <Clipers>
                        <p className="text-violet-600 text-xl border border-violet-600 p-4 rounded-full">
                            <FaCreditCard />
                        </p>

                        <p>
                            Credit
                        </p>
                    </Clipers>
                    <Clipers>
                        <p className="text-red-700 text-xl border border-red-700 p-4 rounded-full">
                            <MdLocalHospital />
                        </p>

                        <p>
                            Insurance
                        </p>
                    </Clipers>
                    <Clipers>
                        <p className="text-blue-700 text-xl border border-blue-700 p-4 rounded-full">
                            <IoIosWater />
                        </p>

                        <p>
                            Water
                        </p>
                    </Clipers>
                    <Clipers>
                        <p className="text-green-400 text-xl border border-green-400 p-4 rounded-full">
                            <RiGalleryView2 />
                        </p>

                        <p>
                            More
                        </p>
                    </Clipers>
                </div>
            </section>
        </div>

    )

}

export default Home