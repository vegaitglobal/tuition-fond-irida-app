using System.Security.Cryptography;
using TuitionFondIrida.Domain.Models.Read;

namespace TuitionFondIrida.Persistence;

internal class ShuffledQuestions
{
    public IEnumerable<Question> Questions { get; }

    public ShuffledQuestions(IEnumerable<Question> questions)
    {
        Questions = Shuffle(questions.ToList());
    }

    private IList<T> Shuffle<T>(IList<T> list)
    {
        RNGCryptoServiceProvider provider = new RNGCryptoServiceProvider();
        int n = list.Count;
        while (n > 1)
        {
            byte[] box = new byte[1];
            do provider.GetBytes(box);
            while (!(box[0] < n * (Byte.MaxValue / n)));
            int k = (box[0] % n);
            n--;
            T value = list[k];
            list[k] = list[n];
            list[n] = value;
        }

        return list;
    }
}