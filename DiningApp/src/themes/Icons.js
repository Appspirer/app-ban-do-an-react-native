import React from "react";
import cart from '../assets/svgs/cart.svg'
import cart_focus from '../assets/svgs/cart_focus.svg'
import foods from '../assets/svgs/foods.svg'
import foods_focus from '../assets/svgs/foods_focus.svg'
import heart from '../assets/svgs/heart.svg'
import heart_focus from '../assets/svgs/heart_focus.svg'
import profile from '../assets/svgs/profile.svg'
import profile_focus from '../assets/svgs/profile_focus.svg'
import shop from '../assets/svgs/shop.svg'
import shop_focus from '../assets/svgs/shop_focus.svg'
import search from '../assets/svgs/search.svg'
import heart_button from '../assets/svgs/heart_button.svg'
import star_gold from '../assets/svgs/star_gold.svg'
import all from '../assets/svgs/all.svg'
import tea from '../assets/svgs/tea.svg'
import health from '../assets/svgs/health.svg'
import grain from '../assets/svgs/grain.svg'
import kitchen from '../assets/svgs/kitchen.svg'
import baking from '../assets/svgs/baking.svg'
import seasonal from '../assets/svgs/seasonal.svg'
import vip from '../assets/svgs/vip.svg'
import cart_button from '../assets/svgs/cart_button.svg'
import next_arrow from '../assets/svgs/next_arrow.svg'
import plus from '../assets/svgs/plus.svg'
import minus from '../assets/svgs/minus.svg'
import settings from '../assets/svgs/settings.svg'
import chat from '../assets/svgs/chat.svg'
import wallet from '../assets/svgs/wallet.svg'
import coupon from '../assets/svgs/coupon.svg'
import release from '../assets/svgs/release.svg'
import order from '../assets/svgs/order.svg'
import star from '../assets/svgs/star.svg'
import back from '../assets/svgs/back.svg'
import share from '../assets/svgs/share.svg'

const SVGs = {
    cart,
    cart_focus,
    foods,
    foods_focus,
    heart,
    heart_focus,
    profile,
    profile_focus,
    shop,
    shop_focus,
    search,
    heart_button,
    star_gold,
    all,
    tea,
    health,
    grain,
    kitchen,
    baking,
    seasonal,
    vip,
    cart_button,
    next_arrow,
    plus,
    minus,
    settings,
    chat,
    wallet,
    coupon,
    release,
    order,
    star,
    back,
    share
}

export default {
    Icons: ({ name = "", height, width }) => {
        if (name in SVGs) {
            const Icons = SVGs[name]
            return <Icons name={name} height={height} width={width} />
        } else {
            return null
        }
    }
}