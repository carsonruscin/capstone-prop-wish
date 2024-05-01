import { Route, Routes, Outlet } from "react-router-dom";
import { AllPosts } from "../all_posts/AllPosts.jsx";
import { MyFavorites } from "../favorites/MyFavorites.jsx";
import { NewPostPage } from "../new_post/NewPostPage.jsx";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Outlet />} />
        <Route path="all_posts" element={<AllPosts />} />
        <Route path="favorites" element={<MyFavorites />} />
        <Route path="new_post" element={<NewPostPage />} />
      </Route>
    </Routes>
  );
};