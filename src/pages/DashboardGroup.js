import React, {useEffect} from 'react';

// import Sidebar from '../partials/Sidebar';
// import Header from '../partials/Header';
// import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
// import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
// import FilterButton from '../partials/actions/FilterButton';
// import Datepicker from '../partials/actions/Datepicker';
import FilterModal from "../partials/actions/FilterModal";
// import DashboardCard01 from '../partials/dashboard/DashboardCard01';
// import DashboardCard02 from '../partials/dashboard/DashboardCard02';
// import DashboardCard03 from '../partials/dashboard/DashboardCard03';
// import DashboardCard04 from '../partials/dashboard/DashboardCard04';
// import DashboardCard05 from '../partials/dashboard/DashboardCard05';
// import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
// import DashboardCard10 from '../partials/dashboard/DashboardCard10';
// import DashboardCard11 from '../partials/dashboard/DashboardCard11';
// import DashboardCard12 from '../partials/dashboard/DashboardCard12';
// import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import {useDispatch, useSelector} from "react-redux";
import PageHeader from "../partials/actions/PageHeader";
import {getGroupData} from "../store/actions/group";

function DashboardGroup() {

  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  const state = useSelector(state => {
    return state.filter
  });

  useEffect(() => {

    console.log('state.group', state.group)

    dispatch(getGroupData(state.group))

  }, [dispatch, state.group])

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      {/*<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />*/}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        {/*<Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />*/}

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            {/*<WelcomeBanner />*/}

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars */}
              {/*<DashboardAvatars />*/}

              {/* Right: Actions */}
              <PageHeader page="group"/>

              <FilterModal/>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Table (Top Channels) */}
              <DashboardCard07 />

              {/* Stacked bar chart (Sales VS Refunds) */}
              <DashboardCard09
                  title="Количество баллов по этапам"
                  description="Сколько баллов набирают разные группы пользователей (берём средний набранный балл) пользователей, по этапам"
                  page="group"
                  data="scoreByStage"
                  size="half"
              />

               {/*Stacked bar chart (Sales VS Refunds) */}
              <DashboardCard09
                  title="Среднее время прохождения по этапам"
                  description="Среднее время прохождения каждого этапа разных групп пользователей"
                  page="group"
                  data="timeByStage"
                  size="half"
              />

              {/*Stacked bar chart (Sales VS Refunds) */}
              <DashboardCard09
                  title="Набранные проценты по этапам"
                  description="Какие этапы набрали максимальное количество процентов "
                  page="group"
                  data="percentByStage"
                  size="half"
              />


               {/*Line chart (Sales Over Time) */}
              <DashboardCard08
                  title="Среднее время просмотра"
                  page="group"
                  data="averageTime"
              />

              <DashboardCard09
                  title="Количество повторных нажатий по вопросам"
                  description="Количество повторных нажатий на один и тот же ответ"
                  page="group"
                  data="repeatByQuestion"
                  size="full"
              />

              {/* /!*Line chart (Acme Plus)*!/*/}
              {/*<DashboardCard01 />*/}
              {/*/!* Line chart (Acme Advanced) *!/*/}
              {/*<DashboardCard02 />*/}
              {/*/!* Line chart (Acme Professional) *!/*/}
              {/*<DashboardCard03 />*/}
              {/*/!* Bar chart (Direct vs Indirect) *!/*/}
              {/*<DashboardCard04 />*/}
              {/*/!* Line chart (Real Time Value) *!/*/}
              {/*<DashboardCard05 />*/}
              {/*/!* Doughnut chart (Top Countries) *!/*/}
              {/*<DashboardCard06 />*/}
              {/*/!* Table (Top Channels) *!/*/}
              {/*<DashboardCard07 />*/}
              {/*/!* Line chart (Sales Over Time) *!/*/}
              {/*<DashboardCard08 />*/}
              {/*/!* Stacked bar chart (Sales VS Refunds) *!/*/}
              {/*<DashboardCard09 />*/}
              {/*/!* Card (Customers) *!/*/}
              {/*<DashboardCard10 />*/}
              {/*/!* Card (Reasons for Refunds) *!/*/}
              {/*<DashboardCard11 />*/}
              {/*/!* Card (Recent Activity) *!/*/}
              {/*<DashboardCard12 />*/}
              {/*/!* Card (Income/Expenses) *!/*/}
              {/*<DashboardCard13 />*/}
              
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default DashboardGroup;