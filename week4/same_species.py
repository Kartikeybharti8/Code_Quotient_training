def belongToSameSpecies(a,  b):
    if len(b) == 0:
        return True
    if len(a) == 0:
        return False
    if(a[0] == b[0]):
        return belongToSameSpecies(a[1:], b[1:])
    else:
        return belongToSameSpecies(a[1:], b)
