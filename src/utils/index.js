import {
  useLocation,
} from 'react-router-dom'

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

export const formatter = (currency, decimals) => {
    return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency,
    minimumFractionDigits: decimals,
  })
}