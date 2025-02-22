
import { ArrowRight } from 'lucide-react';
import Button from "@/components/button";
import IconButton from '@/components/icon-button';

export default function Home() {
  return (
    <main>
      <div className="text-blue-400">Hello world!</div>

      <h1 className="text-4xl font-semibold font-heading">lkdjfnls</h1>
      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <ArrowRight />

      </IconButton>



      {/* <Button text="NLW"/>
      <Button />
      <Button />
      <Button /> */}
    </main>
  );
}
