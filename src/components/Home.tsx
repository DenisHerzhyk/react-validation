import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import { FaHandPeace } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";


Modal.setAppElement('#root')

const Home = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const openModal = () => { setModalIsOpen(true) }
    const closeModal = () => { setModalIsOpen(false) }
    return (
        <>
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-5xl py-[300px] underline decoration-wavy decoration-lime-500">We're home</h1>
            <button onClick={openModal} className="transition ease-out bg-lime-300 hover:bg-lime-400 cursor-auto">More about me</button>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="My info"
            style={{ content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)' } }}
            >
                <div className="flex flex-col justify-center items-center text-center gap-4">
                    <h2 className="text-3xl font-bold">Hi, I'm Denys<FaHandPeace className="text-yellow-500 inline-block ml-2" /></h2>
                    <div className="desciption">
                        <h3 className="text-xl">Checkout my projects and contacts</h3>
                        <ul className="list-none pt-5">
                            <li className="text-xl pb-2"><FaGithub className="inline-block mr-2" /><a href="https://github.com/DenisHerzhyk" className="text-blue-500 underline decoration-1">GitHub - DenisHerzhyk</a></li>
                            <li className="text-xl pb-2"><IoLogoVercel className="inline-block mr-2" /><a href="https://vercel.com/denisherzhyks-projects" className="text-blue-500 underline decoration-1">Vercel - denisherzhyk</a></li>
                            <li className="text-xl pb-2"><FaTelegram className="inline-block mr-2" /><a href="https://t.me/den_progr" className="text-blue-500 underline decoration-1">Telegram - den_progr</a></li>

                        </ul>
                    </div>
                    <button onClick={closeModal} className="text-red-700"><IoIosCloseCircleOutline className="inline-block mr-2"/>Close</button>
                </div>
            </Modal>
        </div>
            
        </>
    )
}

export default Home;