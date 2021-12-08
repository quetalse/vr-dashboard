import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
// import Sidebar from '../partials/Sidebar';
// import Header from '../partials/Header';
// import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
// import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
// import FilterButton from '../partials/actions/FilterButton';
// import Datepicker from '../partials/actions/Datepicker';
// import FilterModal from "../partials/actions/FilterModal";
// import DashboardCard01 from '../partials/dashboard/DashboardCard01';
// import DashboardCard02 from '../partials/dashboard/DashboardCard02';
// import DashboardCard03 from '../partials/dashboard/DashboardCard03';
// import DashboardCard04 from '../partials/dashboard/DashboardCard04';
// import DashboardCard05 from '../partials/dashboard/DashboardCard05';
// import DashboardCard06 from '../partials/dashboard/DashboardCard06';
// import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
// import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
// import DashboardCard12 from '../partials/dashboard/DashboardCard12';
// import DashboardCard13 from '../partials/dashboard/DashboardCard13';
// import Banner from '../partials/Banner';
import PageHeader from "../partials/actions/PageHeader";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom/cjs/react-router-dom";
import {getPersonData} from "../store/actions/person";


function DashboardPerson() {

  const { personId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getPersonData(personId))

  }, [dispatch, personId])

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
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                {/*<FilterButton />*/}
                {/* Datepicker built with flatpickr */}
                {/*<Datepicker />*/}
                {/* Add view button */}
                <button
                    className="btn bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    onClick={() => history.push(`/`)}
                >
                  <svg className="w-4 h-4 fill-current opacity-50 flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M12 9.059V6.5a1.001 1.001 0 0 0-1.707-.708L4 12l6.293 6.207a.997.997 0 0 0 1.414 0A.999.999 0 0 0 12 17.5v-2.489c2.75.068 5.755.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941z" fill="currentColor"/>
                  </svg>
                    <span className="hidden xs:block ml-2">К списку пользователей</span>
                </button>
              </div>
              <PageHeader page="person"/>
              {/*<FilterModal/>*/}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/*Line chart (Sales Over Time) */}
              <DashboardCard08
                  title="Общее время от старта до финиша"
                  data="totalTime"
                  page="person"
              />

              {/*Line chart (Sales Over Time) */}
              <DashboardCard08
                  title="Время на изучение фидбека"
                  data="feedbackTime"
                  page="person"
              />

              {/* Stacked bar chart (Sales VS Refunds) */}
              <DashboardCard09
                  title="Время прохождения каждого вопроса учитывая ошибки"
                  description="Диаграмма со всеми вопросами, показываем секунды на каждый вопрос) (если у пользователя был сначала неверный, а потом верный ответ, то суммируем время прохождения)"
                  page="person"
                  data="timeByQuestion"
                  size="full"
              />

              {/* Stacked bar chart (Sales VS Refunds) */}
              <DashboardCard09
                  title="Время прохождения каждого вопроса учитывая ошибки"
                  description="Диаграмма со всеми вопросами, показываем секунды на каждый вопрос) (если у пользователя был сначала неверный, а потом верный ответ, то суммируем время прохождения)"
                  page="person"
                  data="scoreByQuestion"
                  size="full"
              />

              {/* Stacked bar chart (Sales VS Refunds) */}
              <DashboardCard09
                  title="Время прохождения каждого этапа"
                  description="Диаграмма со всеми вопросами, показываем секунды на каждый вопрос) (если у пользователя был сначала неверный, а потом верный ответ, то суммируем время прохождения)"
                  page="person"
                  data="timeByStage"
                  size="half"
              />
              {/* Stacked bar chart (Sales VS Refunds) */}
              <DashboardCard09
                  title="Баллы за каждый этап"
                  description="Диаграмма со всеми вопросами, показываем секунды на каждый вопрос) (если у пользователя был сначала неверный, а потом верный ответ, то суммируем время прохождения)"
                  page="person"
                  data="scoreByStage"
                  size="half"
              />

              {/* Stacked bar chart (Sales VS Refunds) */}
              <DashboardCard09
                  title="Проценты за каждый этап"
                  description="Диаграмма со всеми вопросами, показываем секунды на каждый вопрос) (если у пользователя был сначала неверный, а потом верный ответ, то суммируем время прохождения)"
                  page="person"
                  data="percentByStage"
                  size="half"
              />


              {/*/!* Line chart (Acme Plus) *!/*/}
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
              {/*/!*<DashboardCard09 />*!/*/}
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

export default DashboardPerson;