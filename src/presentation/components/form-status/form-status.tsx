import React, { useContext } from 'react'
import Styles from './form-status-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import Context from '@/presentation/contexts/form/form-context'

type ContextProps = {
  isLoading: boolean
  errorMessage: string
}

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext<ContextProps>(Context)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMessage && <span className={Styles.error}>Erro</span>}
    </div>
  )
}

export default FormStatus