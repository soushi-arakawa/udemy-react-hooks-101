import React from 'react'

const OperationLog = ({index, operationLog}) => {
  return <>
    <tr>
      <td>{operationLog.description}</td>
      <td>{operationLog.operatedAt}</td>
    </tr>
  </>
}

export default OperationLog