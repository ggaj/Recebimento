import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Progress, Success, SuccessNF, SuccessPercente } from './styles';

export default function ProgressBar() {
  const [heightSuccess, setHeightSuccess] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const { nfProductsSuccess, nfProductsTotal } = useSelector(
    state => state.receipt
  );

  useEffect(() => {
    if (nfProductsTotal !== 0 && nfProductsSuccess >= nfProductsTotal) {
      setHeightSuccess(100);
      setPercentage(100);
      return;
    }
    const height = Math.round((nfProductsSuccess * 100) / nfProductsTotal);
    setHeightSuccess(height);
    setPercentage(height);
  }, [nfProductsSuccess, nfProductsTotal]);

  return (
    <Progress>
      <Success heightSuccess={heightSuccess}>
        <SuccessNF>NF</SuccessNF>
        <SuccessPercente>{percentage}%</SuccessPercente>
      </Success>
    </Progress>
  );
}
