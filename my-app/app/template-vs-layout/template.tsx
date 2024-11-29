import Counter from '../components/Counter';

export default function DemoTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <Counter label="Template 中的计数器（每次导航重置）" />
      </div>
      {children}
    </div>
  );
}
