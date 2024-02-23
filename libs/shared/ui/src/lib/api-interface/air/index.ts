/* eslint-disable no-debugger */
import { customFetch } from '../../utils';

export default function getAirportCodes() {
  return customFetch({
    query: '/air/airports',
  });
}
