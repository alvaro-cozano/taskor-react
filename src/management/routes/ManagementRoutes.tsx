import {Navigate, Routes, Route} from 'react-router-dom';

import { CardPage, BoardPage, CalendarPage, ProfilePage, SubscriptionPage } from '../../management';

export const ManagementRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<BoardPage />}/>
        <Route path="/cards/:boardId" element={<CardPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />

        <Route path="/*" element={<Navigate to="/" />}/>
    </Routes>
  )
}
