using Microsoft.EntityFrameworkCore;
using StuffSupplierAPI.Data;
using StuffSupplierAPI.Interface;
using StuffSupplierAPI.Model;

namespace StuffSupplierAPI.Repositories
{
    public sealed class OfferRepository : IOfferRepository
    {
        private readonly DataContext _context;

        public OfferRepository(DataContext context)
        {
            _context = context;
        }
        public Task<Offer> AddOffer(Offer offer)
        {
            throw new NotImplementedException();
        }

        public Task<List<Offer>> GetOffers()
        {
            throw new NotImplementedException();
        }

        public Task<Offer> GetOffer(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Offer> UpdateOffer(Offer offer)
        {
            throw new NotImplementedException();
        }
    }
}
