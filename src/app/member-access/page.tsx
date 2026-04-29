'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MemberAccessSection from '@/components/MemberAccessSection';

export default function MemberAccessPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <MemberAccessSection />
            <Footer />
        </main>
    );
}
