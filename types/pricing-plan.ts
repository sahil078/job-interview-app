export interface PricingPlan {
  id: string
  name: string
  price: number
  period: string
  features: string[]
  isPopular: boolean
}
