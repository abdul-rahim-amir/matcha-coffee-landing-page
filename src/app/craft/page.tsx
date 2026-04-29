'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';
import SustainabilitySection from '@/components/SustainabilitySection';
import JoinRitual from '@/components/JoinRitual';

export default function CraftPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <div className="pt-40">
                <ProcessSection />
                <SustainabilitySection />
                <JoinRitual />
            </div>
            <Footer />
        </main>
    );
}
