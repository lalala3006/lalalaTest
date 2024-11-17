<template>
  <div class="receipt">
      <button class="close">×</button>
      <div class="top-container">
        <img src="../../assets/people.png" class="image">
        <p class="merchant-name">上海好利来</p>
      </div>
      <p class="amount">-210.00</p>
      <div class="info">
        <div class="line">
          <span>原价</span>
          <span class="original-price">¥300.00</span>
        </div>
        <div class="line">
          <span>优惠</span>
          <span class="discount">满300元减90元优惠 ¥90.00</span>
        </div>
        <div class="line">
          <span>当前状态</span>
          <span>支付成功</span>
        </div>
        <div class="line">
          <span>支付时间</span>
          <span>2024年11月16日 15:22:27</span>
        </div>
        <div class="line">
          <span>商品</span>
          <span>消费</span>
        </div>
        <div class="line">
          <span>商户全称</span>
          <span>吴晟兄弟餐饮管理（上海）有限公司</span>
        </div>
        <div class="line">
          <span>收单机构</span>
          <span>财付通支付科技有限公司</span>
        </div>
        <div class="line">
          <span>支付方式</span>
          <span>零钱通</span>
        </div>
        <div class="line">
          <span>交易单号</span>
          <span>4200057888202411161543679075</span>
        </div>
        <div class="line">
          <span>商户单号</span>
          <span>可在支持的商户扫码退款</span>
        </div>
      </div>

    <footer class="footer">
      <div class="barcode">
        <div class="barcode-line"></div>
        <span>E1BC20C513A744A5A15639FA9C0B6A9E</span>
      </div>
    </footer>
  </div>
</template>

<script setup>

</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
}

.receipt {
  max-width: 100%;
  padding: 5px 20px;
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
}

.close {
  background: none;
  border: none;
  font-size: 50px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}

.top-container {
    display: flex;
    flex-direction: column;
      text-align: center;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
}

  .image{
    height: 50px;
    width: 50px;
    margin-bottom: 5px;
  }

  .merchant-name {
  font-size: 16px;
  color: #333;
}

.header {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
}

.main {
  margin-top: 16px;
}

.profile-icon {
  font-size: 40px;
  margin-bottom: 8px;
}



.amount {
  font-size: 36px;
  text-align: center;
  color: #e60000;
  margin: 16px 0;
}

.info {
  font-size: 14px;
}

.line {
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
}

.original-price {
  text-decoration: line-through;
  color: #999;
}

.discount {
  color: orange;
}

.footer {
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
}

.barcode {
  margin-top: 8px;
}

.barcode-line {
  height: 40px;
  background: repeating-linear-gradient(
    to right,
    black,
    black 2px,
    white 2px,
    white 4px
  );
  margin: 0 auto;
  width: 80%;
}
</style>
