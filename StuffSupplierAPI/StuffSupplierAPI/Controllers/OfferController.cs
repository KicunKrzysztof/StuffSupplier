using Microsoft.AspNetCore.Mvc;
using StuffSupplierAPI.Interface;
using StuffSupplierAPI.Model;

namespace StuffSupplierAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OfferController : ControllerBase
    {
        private readonly IOfferService _offerService;

        public OfferController(IOfferService offerService)
        {
            _offerService = offerService;
        }
        [HttpGet]
        [Route("orders")]
        public async Task<IActionResult> GetOffers()
        {
            var offers = await _offerService.GetOffers();
            return Ok(offers);
        }

        //[HttpGet]
        //[Route("orders/{orderId:int}")]
        //public async Task<IActionResult> GetOrder(int orderId)
        //{
        //    var orders = await _orderService.GetOrder(orderId);
        //    return Ok(orders);
        //}

        //[HttpPost]
        //[Route("orders")]
        //public async Task<IActionResult> CreateOrder(Order newOrder)
        //{
        //    var orders = await _orderService.AddOrder(newOrder);
        //    return Ok(orders);
        //}
        //[HttpPut]
        //[Route("orders")]
        //public async Task<IActionResult> UpdateOrder(Order newOrder)
        //{
        //    var orders = await _orderService.UpdateOrder(newOrder);
        //    return Ok(orders);
        //}
    }
}
