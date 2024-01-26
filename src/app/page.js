import Form from "./components/Form";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center py-10">
      <h2 className="text-emerald-700 pt-6 font-bold text-2xl">Roamer V1.0</h2>
      <Form />
    </main>
  );
}
