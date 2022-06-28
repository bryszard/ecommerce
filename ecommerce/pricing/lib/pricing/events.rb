module Pricing
  class CouponRegistered < Infra::Event
    attribute :coupon_id, Infra::Types::UUID
    attribute :name, Infra::Types::String
    attribute :code, Infra::Types::String
    attribute :discount, Infra::Types::CouponDiscount
  end

  class PriceSet < Infra::Event
    attribute :product_id, Infra::Types::UUID
    attribute :price, Infra::Types::Price
  end

  class HappyHourCreated < Infra::Event
    attribute :id, Infra::Types::UUID
    attribute :product_ids, Infra::Types::Array.of(Infra::Types::UUID)
    attribute :name, Infra::Types::String
    attribute :code, Infra::Types::String
    attribute :discount, Infra::Types::HappyHourDiscount
    attribute :start_hour, Infra::Types::Hour
    attribute :end_hour, Infra::Types::Hour
  end

  class ProductAddedToHappyHour < Infra::Event
    attribute :product_id, Infra::Types::UUID
    attribute :discount, Infra::Types::PercentageDiscount
    attribute :start_hour, Infra::Types::Hour
    attribute :end_hour, Infra::Types::Hour
  end

  class OrderTotalValueCalculated < Infra::Event
    attribute :order_id, Infra::Types::UUID
    attribute :discounted_amount, Infra::Types::Value
    attribute :total_amount, Infra::Types::Value
  end

  class PriceItemValueCalculated < Infra::Event
    attribute :order_id, Infra::Types::UUID
    attribute :product_id, Infra::Types::UUID
    attribute :quantity, Infra::Types::Quantity
    attribute :discounted_amount, Infra::Types::Value
    attribute :amount, Infra::Types::Value
  end

  class PercentageDiscountSet < Infra::Event
    attribute :order_id, Infra::Types::UUID
    attribute :amount, Infra::Types::Price
  end

  class PriceItemAdded < Infra::Event
    attribute :order_id, Infra::Types::UUID
    attribute :product_id, Infra::Types::UUID
  end

  class PriceItemRemoved < Infra::Event
    attribute :order_id, Infra::Types::UUID
    attribute :product_id, Infra::Types::UUID
  end

  class PercentageDiscountReset < Infra::Event
    attribute :order_id, Infra::Types::UUID
  end

  class PercentageDiscountChanged < Infra::Event
    attribute :order_id, Infra::Types::UUID
    attribute :amount, Infra::Types::Price
  end

  class ProductMadeFreeForOrder < Infra::Event
    attribute :order_id, Infra::Types::UUID
    attribute :product_id, Infra::Types::UUID
  end
end
