/**
 * InsuranceAPI
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Policy } from './policy';


export interface Agent { 
    agentId?: number;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    phone?: string | null;
    commissionRate?: number;
    status?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    policies?: Array<Policy> | null;
}

