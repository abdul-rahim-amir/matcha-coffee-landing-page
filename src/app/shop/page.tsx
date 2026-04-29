'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShopSection from '@/components/ShopSection';
import CollectionsSection from '@/components/CollectionsSection';
import JoinRitual from '@/components/JoinRitual';

export default function ShopPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <div className="pt-40">
                <ShopSection />
                <CollectionsSection />
                <JoinRitual />
            </div>
            <Footer />
        </main>
    );
}
