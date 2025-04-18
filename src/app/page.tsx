import { HeaderSection } from '@/components/atom/header-section';
import Filtrer from '@/components/molecules/filtrer';
import { ListCard } from '@/components/organisms/list-card';
import { SearchSection } from '@/components/molecules/search-section';
import { SideBar } from '@/components/Template/layout-sidebar';

export default function WelcomeScreen() {
    return (
        <SideBar>
            <HeaderSection text="Buscar Disciplina" />
            <SearchSection />
            <ListCard />
        </SideBar>
    );
}
