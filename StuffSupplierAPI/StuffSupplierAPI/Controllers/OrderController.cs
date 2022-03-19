using Microsoft.AspNetCore.Mvc;
using StuffSupplierAPI.Interface;
using StuffSupplierAPI.Model;

namespace StuffSupplierAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet]
        [Route("orders")]
        public async Task<IActionResult> GetOrders()
        {
            var orders = await _orderService.GetOrders();
            return Ok(orders);
        }

        [HttpGet]
        [Route("orders/{orderId:int}")]
        public async Task<IActionResult> GetOrder(int orderId)
        {
            var orders = await _orderService.GetOrder(orderId);
            return Ok(orders);
        }

        [HttpPost]
        [Route("orders")]
        public async Task<IActionResult> CreateOrder(Order newOrder)
        {
            var orders = await _orderService.AddOrder(newOrder);
            return Ok(orders);
        }
    }
}