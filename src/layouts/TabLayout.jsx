import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { homeOutline, listOutline, cogOutline } from 'ionicons/icons';

const TabLayout = ({ children }) => {


    return (
      <IonTabs>
      <IonRouterOutlet> {/* Include IonRouterOutlet */}
        {children} {/* Render the child components */}
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/home">
          <IonIcon icon={homeOutline} />
        </IonTabButton>
        <IonTabButton tab="tab2" href="/about">
          <IonIcon icon={listOutline} />
        </IonTabButton>
        <IonTabButton tab="tab3" href="/contact">
          <IonIcon icon={cogOutline} />
        </IonTabButton>
        {/* Add other tab buttons as needed */}
      </IonTabBar>
      </IonTabs>
    )
}



export default TabLayout;