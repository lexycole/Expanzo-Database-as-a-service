import * as React from 'react';

import { useRouter } from 'next/router';
import { parseTopSearchCountryCode } from '../../components/link/TopSearchLink';
import { PageParamsError } from '../../error/PageParamsError';
import { TopSearchPersonWrapper } from '../../view/topSearch/TopSearchPersonWrapper';

function TopSearchPerson() {
  const router = useRouter();
  const { topSearchCode: topSearchUrl } = router.query;

  let countryCode: string | null = null;

  if (topSearchUrl !== undefined) {
    countryCode = parseTopSearchCountryCode(topSearchUrl.toString());

    if (countryCode === null) {
      return <PageParamsError />;
    }
  }

  return (
    <TopSearchPersonWrapper
      key={countryCode}
      countryCode={countryCode}
      originalUrl={topSearchUrl ? topSearchUrl.toString() : null}
    />
  );
}

export default TopSearchPerson;
