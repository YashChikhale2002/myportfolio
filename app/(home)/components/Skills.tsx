"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiAngular, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiWordpress } from 'react-icons/si'

export default function Skills() {

    const skills = [
        {
            text: "Tailwind",
            Icon: SiTailwindcss,
        },
        {
            text: "JavaScript",
            Icon: SiJavascript,
        },
        {
            text: "React",
            Icon: SiReact,
        },
        {
            text: "Next Js",
            Icon: SiNextdotjs,
        },
        {
            text: "WordPress",
            Icon: SiWordpress,
        },
        {
            text: "Angular",
            Icon: SiAngular,
        },
    ]

    return (
        <div className='max-w-5xl mx-auto px-8'>
            <Title text='Skills 🧠' className="flex flex-col items-center justify-center -rotate-6" />
            <HoverEffect items={skills} />
        </div>
    )
}
