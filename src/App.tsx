import { BaseTabs, ITab, PageHeader } from 'components';

function App() {
  const tabs: ITab[] = [{ id: 0, label: 'fdsf', to: '' }];

  return (
    <div className="max-w-md m-auto pt-2 px-2">
      <PageHeader />
      <BaseTabs tabs={tabs} />
    </div>
  );
}

export default App;
