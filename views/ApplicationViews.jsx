import { Route, Routes, Outlet } from "react-router-dom";
import { AllPosts } from "../components/all_posts/AllPosts.jsx";
import { MyFavorites } from "../components/favorites/MyFavorites.jsx";
import { NewPostPage } from "../components/new_post/NewPostPage.jsx";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="all_posts" element={<AllPosts />} />
        <Route path="favorites" element={<MyFavorites />} />
        <Route path="new_post" element={<NewPostPage />} />
      </Route>
    </Routes>
  );
};
