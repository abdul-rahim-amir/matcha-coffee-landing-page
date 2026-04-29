'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IngredientsSection from '@/components/IngredientsSection';
import HealthBenefitsSection from '@/components/HealthBenefitsSection';
import FaqSection from '@/components/FaqSection';

export default function IngredientsPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <div className="pt-40">
                <IngredientsSection />
                <HealthBenefitsSection />
                <FaqSection />
            </div>
            <Footer />
        </main>
    );
}
