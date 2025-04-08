'use client';

import Hamburger from "hamburger-react"

import { useState } from 'react'

export default function HamburgerComponent() {
    const [open, setOpen] = useState(false);
    return <div>
        <Hamburger 
        size={24}
        toggled={open}
        toggle={setOpen}
        />
    </div>
}