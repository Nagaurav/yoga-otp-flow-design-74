
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Instructors from "./pages/Instructors";
import InstructorDetail from "./pages/InstructorDetail";
import BookingPage from "./pages/BookingPage";
import ContentBrowser from "./pages/ContentBrowser";
import MessagesPage from "./pages/MessagesPage";
import ChatDetail from "./pages/ChatDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/instructors/:id" element={<InstructorDetail />} />
          <Route path="/instructors/:id/book" element={<BookingPage />} />
          <Route path="/instructors/:id/book/:classId" element={<BookingPage />} />
          <Route path="/content" element={<ContentBrowser />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/messages/chat/:id" element={<ChatDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
