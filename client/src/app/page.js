"use client";
import AppComponent from "@/components/AppComponent";
import DataContextProvider from "@/context/DataContext";
export default function Home() {
  return (
    <DataContextProvider>
      <div>
        <AppComponent />
      </div>
    </DataContextProvider>
  );
}
