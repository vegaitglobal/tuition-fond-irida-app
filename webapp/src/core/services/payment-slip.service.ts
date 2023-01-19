import axios from "axios";
import { PaymentSlip } from "../models/payment-slip";

export const fetchPaymentSlip = async (): Promise<PaymentSlip> => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const response = await axios.get<PaymentSlip>(`${baseUrl}/api/PaymentSlips`);
    const paymentSlip = response.data;
    return new PaymentSlip(
        paymentSlip.sender,
        paymentSlip.purposeOfPayment,
        paymentSlip.receiver,
        paymentSlip.codeOfPayment,
        paymentSlip.amount,
        paymentSlip.currency,
        paymentSlip.receiverAccount,
        paymentSlip.modelNumber,
        paymentSlip.referenceNumber
    );
};
