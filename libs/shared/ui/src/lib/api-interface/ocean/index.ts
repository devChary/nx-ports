import { customFetch } from '../../utils';

export default function getOceanCodes() {
  return customFetch({
    query: '/ocean/ports',
  });
}
